import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

/* Note:
render(useCounter) will throw error because : 
1. Unlike other  react component custom hook does not return JSX
2. custom hook cannot be called outside custom component
so solution is to use renderHook from RTL
Unlike other components which can be asserted using screen, custom hook do not have any DOM elements
we need to renderHook return an object result, this result has property current that has all the return value of custom hook
*/

describe('useCounter', () => {
  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: { initialCount: 10 },
    })
    expect(result.current.count).toBe(10)
  })


  test('should increment the count', () => {
    /*
        result.current.increment())
        expect(result.current.count).toBe(1)

        this above code will fail- expected 1 received 0
        since function call of increment causes states update so need to be wrapped in act
     */
    const { result } = renderHook(useCounter)
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('should decrement the count', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})