import { useState } from 'react';
import { search as searchApi, Word } from '../api/search';
import { leastWait } from '../util/async';

interface SearchTask {
  type: string;
  pattern: string;
  words: Word[];
  more: boolean;
  searching: boolean;
}

interface Return {
  task: SearchTask | undefined;
  search: (type: string, pattern: string) => Promise<void>;
  moreSearch: () => Promise<void>;
  reset: () => void;
}

const useSearch = (): Return => {
  const [task, setTask] = useState<SearchTask | undefined>();

  const search = async (type: string, pattern: string): Promise<void> => {
    const newTask: SearchTask = {
      type,
      pattern,
      words: [],
      more: false,
      searching: true
    };
    setTask(newTask);
    try {
      const response = await leastWait(searchApi(type, pattern, 0), 500);
      setTask({
        ...newTask,
        words: response.datas,
        more: response.more,
        searching: false
      });
    } catch (error) {
      setTask({ ...newTask, searching: false });
    }
  };

  const moreSearch = async (): Promise<void> => {
    if (task === undefined || task.searching || !task.more) {
      return;
    }

    try {
      setTask({
        ...task,
        searching: true
      });
      const response = await leastWait(
        searchApi(task.type, task.pattern, task.words.length),
        500
      );
      setTask({
        ...task,
        words: [...task.words, ...response.datas],
        more: response.more,
        searching: false
      });
    } catch (error) {
      setTask({ ...task, searching: false });
    }
  };

  const reset = (): void => {
    setTask(undefined);
  };

  return { task, search, moreSearch, reset };
};

export { useSearch, SearchTask };
