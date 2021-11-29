import {useCallback, useEffect, useState} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
  createHttpLink,
} from '@apollo/client';
import {AsyncStorageWrapper, CachePersistor} from 'apollo3-cache-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistenceMapper} from '../storage/persistenceMapper';
import { url } from '../config/env';

export const useApolloClient = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();
  const [persistor, setPersistor] = useState<
    CachePersistor<NormalizedCacheObject>
  >();
  const clearCache = useCallback(() => {
    if (!persistor) {
      return;
    }
    persistor.purge();
  }, [persistor]);

  useEffect(() => {
    async function init() {
      const cache = new InMemoryCache();
      let newPersistor = new CachePersistor({
        cache,
        storage: new AsyncStorageWrapper(AsyncStorage),
        debug: __DEV__,
        trigger: 'write',
        persistenceMapper,
      });
      await newPersistor.restore();
      setPersistor(newPersistor);
      const httpLink = createHttpLink({uri: url});
      setClient(
        new ApolloClient({
          link: httpLink,
          cache,
        }),
      );
    }

    init();
  }, []);

  return {
    client,
    clearCache,
  };
};