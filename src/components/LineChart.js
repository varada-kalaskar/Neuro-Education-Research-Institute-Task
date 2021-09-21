import { Chart } from "react-google-charts";

const LineChart = () => {
    return ( 
        <div className="linechart">
            <Chart
  width={'55vw'}
  height={'30vh'}
  chartType="LineChart"
  loader={<div>Loading Chart</div>}
  data={[
    ['x', 'day'],
    [0, 10],
    [10, 40],
    [20, 30],
    [30, 25],
    [40, 40],
    [50, 32],
    [55, 42],
    [60, 47],
    [65, 63],
    [70, 35],
    [75, 73]    
  ]}
  options={{
    hAxis: {
        viewWindow: { min: 0, max: 80}
    },
    vAxis: {
        viewWindow: { min: 0, max: 80}
    },
    curveType :'function',
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
     );
}
 
export default LineChart ;