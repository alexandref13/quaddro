import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react';

type FeedProviderProps = {
  children: ReactNode;
};

interface JsonProps {
  id: number;
  title: string;
  hoursStart: string;
  hoursEnd: string;
}

type FeedContextData = {
  jsons: JsonProps[];
  id: number;
  setJsons: Dispatch<SetStateAction<JsonProps[]>>;
  setId: Dispatch<SetStateAction<number>>;
  handleDeletePost: (id: number) => void;
};

export const FeedContext = createContext({} as FeedContextData);

export const FeedProvider = ({ children }: FeedProviderProps) => {
  const [id, setId] = useState(1);
  const [jsons, setJsons] = useState<JsonProps[]>([]);

  function handleDeletePost(id: number) {
    setJsons((current) =>
      current.filter((post) => {
        return post.id !== id;
      })
    );
  }

  return (
    <FeedContext.Provider
      value={{
        jsons,
        setJsons,
        id,
        setId,
        handleDeletePost
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
