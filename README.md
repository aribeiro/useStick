# useStick
React hook to read the window height Position and change the state when it is in a defined height;

These hook is tinked to be used as a solution to stick header components, you can use it like this:



```javascript
import {useStick) from 'useStick'

function MyComponent(){
  const [stick] = useStick(false, 900)
  
  return (
    <div className={`my-component ${stick && "stick-class"}`}>
    ...
    </div>
  )
}
```
When you scroll the window 900 pixels it will trigger the state change, and your `stick-class` will be added to the component `div`

