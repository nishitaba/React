
import './App.css'
const Header=()=><header><h1>Inside MyWebsite</h1></header>
const Content=()=><main><h2>Main content</h2></main>
const Footer=()=><footer><p>&copy; 2026</p></footer>

function withBorder(WrappedComponent)
{
  return function NewComponent(props)
  {
    return(
    <div style={{border: '10px dotted black'}}>
      <WrappedComponent {...props}/>
    </div>
  );
};
}

function Greeting(props)
{
  return (
    <h1>Welcome {props.name}</h1>
  );
}
const GreetingWithBorder=withBorder(Greeting);
function App() {
  
  return (
      <>
      <Header/>
      <Content/>
      <Greeting name="Nishita"/>
      <GreetingWithBorder name="MCA"/>
      <Footer/>
      </>
  );
}

export default App
