import './App.css';


const element = (
  <h1 className="greeting">
    HELLO DIV
  </h1>
);


const TextProps = (props) => {
  const { text } = props;
  const { lorem } = props;
  
  return (
    <div className="container2">
      <div>{text}</div>
      <div>{text} {lorem}</div>
      <div>{props.text}</div>
    </div>
  )
}

const GetText = (props) => {
  return props.children ? props.children : 'def text';
}


const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: "😀",
    name: "grinning face"
  },
  {
    emoji: "🎉",
    name: "party popper"
  },
  {
    emoji: "💃",
    name: "woman dancing"
  }
];

const App = () => {
  const greeting = "greeting";
  return (
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>I am writing JSX</p>

      <div className="container2">
        <div>{element}</div>
        <div>{element}</div>
        <div>{element}</div>
        <div>{element}</div>
        <div>{element}</div>
        <div>{element}</div>
      </div>

      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>

      <TextProps text="Props Text" />
      <TextProps text="Text Props" />

      <GetText>
        <TextProps lorem="Lorem ipsun" text={37}/>
      </GetText>

      <GetText>

      </GetText>

    </div>
  )
}
export default App;
