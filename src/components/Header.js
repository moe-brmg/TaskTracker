import Button from "./Button"

const Header = ({ title, showAdd, showTask }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        onClick={showAdd}
        color={showTask ? "black" : "red"}
        text={showTask ? "Close" : "Add"}
      />
    </header>
  )
}

Header.defaultProps = {
  title: "Task Tracker",
}

export default Header
