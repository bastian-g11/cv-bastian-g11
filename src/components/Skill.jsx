const Skill = ({ title, percentage = 100 }) => (
  <div>
    <h1 className='text-lg font-bold'>{title}</h1>
    <div className='flex flex-nowrap'>
      <svg viewBox='0 0 36 36'>
        <path
          className='fill-transparent stroke-gray-400 stroke-2'
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <path
          style={{ strokeDasharray: `${percentage}, 100` }}
          className='fill-transparent stroke-1 stroke-indigo-600'
          d='M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831'
        />
        <text
          className='text-sm'
          x='50%'
          y='50%'
          style={{ dominantBaseline: 'middle', textAnchor: 'middle' }}
        >
          {percentage}%
        </text>
      </svg>
    </div>
  </div>
);

export { Skill };
