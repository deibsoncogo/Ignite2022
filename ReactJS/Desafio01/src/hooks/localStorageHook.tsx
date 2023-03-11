import { ITask } from '../interfaces/task'

interface IKey { key: 'Pending' | 'Checked' }

export function useLocalStorageHook() {
  const keyLocalStorage = 'Ignite2022Desafio1:tasks'

  function createLocalStorage<T>({ key }: IKey, data: T): void {
    localStorage.setItem(`${keyLocalStorage}${key}`, JSON.stringify(data))
  }

  function findLocalStorage({ key }: IKey): ITask[] {
    const storageJson = localStorage.getItem(`${keyLocalStorage}${key}`)

    if (storageJson) { return JSON.parse(storageJson) }

    return []
  }

  function deleteLocalStorage({ key }: IKey): void {
    localStorage.removeItem(`${keyLocalStorage}${key}`)
  }

  return { createLocalStorage, findLocalStorage, deleteLocalStorage }
}
