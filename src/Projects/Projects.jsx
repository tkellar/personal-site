import React from 'react'
import Container from 'react-bootstrap/Container'
import ButtonLink from 'components/Button/ButtonLink'
import projectTags from './projectTags'
import {
  FilterList,
  FilterListHeader,
  FilterListSearchBar,
  FilterListTagGroup,
  FilterListTag
} from '@tkellar/react-filter-list'

const Projects = () => {
  const projects = [
    {
      projectName: 'Maze',
      tags: [projectTags.cpp],
      description:
        'A command line program that takes an input file representing a maze and writes an output file with the solution.',
      date: 'January 2019',
      backgroundImage: 'img/computer.jpeg',
      hasMoreInfo: true
    }
  ]

  const projectTemplate = ({
    projectName,
    tags,
    description,
    date,
    hasMoreInfo
  }) => (
    <div className='project-item bg-dark border border-secondary rounded p-3 text-light'>
      <div className='d-flex align-items-center justify-content-between'>
        <h2 className='my-0'>{projectName}</h2>
        {hasMoreInfo && <i className='bi bi-arrows-fullscreen text-muted' />}
      </div>
      <h6 className='text-muted m-0'>{date}</h6>
      <div className='d-flex align-items-center border-top border-bottom border-secondary my-2 py-1'>
        {tags.map((tag) => (
          <FilterListTag displayName={tag} key={tag} />
        ))}
      </div>
      {description}
    </div>
  )

  return (
    <div className='Portfolio bg-dark p-3' style={{ height: '100vh' }}>
      <ButtonLink linkTo='/' variant='secondary'>
        <span className='mx-2'>
          <i className='bi bi-arrow-left' />
        </span>
        Home
      </ButtonLink>
      <Container className='p-3'>
        <h1 className='text-light display-2'>Projects</h1>
        <FilterList
          theme='dark'
          listData={projects}
          renderComponent={projectTemplate}
          propertyMap={{ keywordSearchProperty: 'projectName' }}
        >
          <FilterListHeader>
            <FilterListSearchBar>Filter Projects</FilterListSearchBar>
            <FilterListTagGroup>
              {Object.values(projectTags).map((value) => (
                <FilterListTag displayName={value} key={value} />
              ))}
            </FilterListTagGroup>
          </FilterListHeader>
        </FilterList>
      </Container>
    </div>
  )
}

export default Projects
