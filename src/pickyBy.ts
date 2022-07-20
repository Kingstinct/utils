function pickBy<T extends Record<string, unknown>, TKey extends keyof T>(object: T, predicate: (value: T[TKey], key: TKey) => boolean): Partial<T> {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in object) {
    // eslint-disable-next-line
    // @ts-ignore
    if (!predicate(object[key], key)) {
      // eslint-disable-next-line functional/immutable-data, no-param-reassign
      delete object[key]
    }
  }

  return { ...object }
}

export default pickBy
