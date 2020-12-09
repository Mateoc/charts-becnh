import React, {createRef, useState} from 'react';

function ChartWithConfig<P extends {points: number}>(ChartType: React.ComponentType<P>) {
  let inputRef = createRef<HTMLInputElement>()
  let value = 100;
  if(inputRef.current?.value){
    const inputValue = Number(inputRef?.current?.value);
    if(!isNaN(inputValue)){
      value = inputValue;
    }
  }
  const [points, setPoints] = useState(value);
  function ChartEnhance(props: P) {


    return (
      <div>
        <div>
          <ChartType {...props} points={points}/>
        </div>
        <div>
          <input type='number' defaultValue={100} ref={inputRef}/>
          <button onClick={() => {
            let input = inputRef.current;
            if(input){
              let value = Number(input.value);
              if(!isNaN(value)){
                setPoints(value)
              }
            }
          }}>Update</button>
        </div>
      </div>
    )
  }

  return ChartEnhance;
}



export default ChartWithConfig;