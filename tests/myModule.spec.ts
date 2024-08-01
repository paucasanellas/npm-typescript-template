import { myFunction } from '../src/myModule'

describe('myFunction', () => {
  it('should return "Hello, world!"', () => {
    expect(myFunction()).toBe('Hello, world!')
  })
})
