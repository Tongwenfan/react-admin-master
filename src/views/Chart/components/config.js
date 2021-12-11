export const chartColor = [
  '#c23531',
  '#2f4554',
  '#61a0a8',
  '#d48265',
  '#91c7ae',
  '#749f83',
  '#ca8622',
  '#bda29a',
  '#6e7074',
  '#546570',
  '#c4ccd3'
]


export const barOptionConfig = {
  tooltip: {
    trigger: 'item'
  },
  title: {
    text: 'Referer of a Website',
    left: 'center',
    top:'-1px'
  },
  legend: {
    top: '7%',
    left: 'center',
    // orient: 'vertical',
  },
  grid: {
    top:'2%',
    left: '1px',
    right: '1%',
    bottom: '1%',
    containLabel: true
  },
  series: [
    {
      name: '总数',
      type: 'pie',
      radius: ['40%', '70%'],
      center: ['50%', '60%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 1,
        borderColor: '#fff',
        borderWidth: 0
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: '14',
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ]
    }
  ]
}


