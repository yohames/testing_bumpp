import { describe, expect, it } from 'vitest'
import { hello } from '../src/hello'

describe('hello', () => {
  it('greets with default name', () => {
    expect(hello()).toBe('Hello World!')
  })

  it('greets with provided name', () => {
    expect(hello('Alice')).toBe('Hello Alice!')
  })
})
