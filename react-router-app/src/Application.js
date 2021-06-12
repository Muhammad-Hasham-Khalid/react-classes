import { Switch, Route, Link, Redirect } from 'react-router-dom';

// Pages
function Home(props) {
  console.log(props);
  return (
    <div>
      <h1>
        Home Page <Link to="/about/one">About One</Link>
      </h1>
      <button
        onClick={() => {
          props.history.push('/about/hello');
          // props.history.goBack();
          // props.history.push(`/${id}`);
          // props.history.replace('/about/hello');
        }}
      >
        Go To About Hello
      </button>
    </div>
  );
}

function About() {
  return (
    <Switch>
      <Route path="/about/hello" component={AboutHello} />
      <Route path="/about/one" component={AboutOne} />
      <Redirect to="/home/5/shahzaib" />
    </Switch>
  );
}

function AboutOne(props) {
  console.log(props);
  return (
    <h1>
      About One{' '}
      {/* <a href="https://www.google.com" target="_blank" rel="noreferrer">
        Google
      </a> */}
      <Link to="/">Home</Link>
    </h1>
  );
}

function AboutHello() {
  return <h1>About Hello</h1>;
}

export const Application = () => {
  return (
    <Switch>
      <Route path="/home/:id/:name" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

// "/" is a substring of "/about"
