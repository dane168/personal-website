const SkillTag = ({ skill }: { skill: string }) => {
  return (
    <>
      <div className='px-2 py-1 mr-1 mb-1 text-xs font-bold text-black bg-cyan-100 dark:bg-transparent bg-opacity-30 dark:text-cyan-600 border border-cyan-600 rounded-full whitespace-nowrap'>
        <p>{skill}</p>
      </div>
    </>
  )
}

export default SkillTag