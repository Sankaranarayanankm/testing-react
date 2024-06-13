import { render,screen } from "@testing-library/react"
import Greeting from "./Greeting"


test('testing greeting',()=>{
  render(<Greeting />);
  const element=screen.findByText('this',{exact:false});
  expect(element).toBeInTheDocument();
})