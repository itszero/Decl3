# Decl3

**Work in progres**

Declarative React-D3 framework that allow you to create a chart by composing elements.

```jsx
<D3 width={600} height={260} margin={{left: 50}}>
  <Axis
    axis='x'
    domain={[0, 100]}
    ticks={6}
  />
  <Axis
    axis='y'
    domain={[0, 0.5]}
    ticks={6}
  />
  <Line color='red' data={values[0]} name='Line 1'/>
  <Line color='green' data={values[1]} name='Line 2'/>
  <Line color='blue' data={values[2]} name='Line 3'/>
</D3>
```
