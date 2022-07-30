const Skill = ({ title, percentage = '100' }) => (
  <div className='skill-container w-32'>
    <h1 className='text-center'>{title}</h1>
    <svg viewBox='5 0 150 150'>
      <circle className='stroke-light-gray' cx='80' cy='80' r='60' />=
      <circle
        className='stroke-main-purple'
        style={{ strokeDashoffset: `calc(400 - (400 * ${percentage}) / 100)` }}
        cx='80'
        cy='80'
        r='60'
      />
      <text
        className='text-4xl flex self-center'
        x='55%'
        y='52%'
        style={{ dominantBaseline: 'middle', textAnchor: 'middle' }}
      >
        {percentage}%
      </text>
    </svg>
  </div>
);

export { Skill };
