import { withRouter } from 'next/router'
import  Head  from 'next/head'
import fetch from 'isomorphic-unfetch'

const About = ({router, characters}) => {
  console.log(characters);
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>
      <h1>Hello from About!</h1>
      <button onClick={() => router.back()}>Go Back</button>
      <button onClick={() => router.replace('/contact')}>Go Contact</button>
      {
        characters.map(character =>{
        return <p key={character.name}>{character.name}</p>
      })
      }
    </div>
  )
}

//this method gets called server side
About.getInitialProps = async ()=>{
  // return fetch('https://swapi.co/api/people')
  //   .then(response => response.json)
  //   .then(data => {
  //     console.log(data);
  //     return { characters:data };
  //   })
    const response = await fetch('https://swapi.co/api/people')
    const data = await response.json()
    return { characters: data.results }
}

export default withRouter(About)
