import { tinyReact, Component } from './tinyReact';

console.log(tinyReact)

class HelloWorld extends Component {
    render() {
        return <div className="hello">hello</div>
    }
}
// const a = <div a="b">a<span>x</span></div>
const a = <HelloWorld>inner
    <span>a</span>
    <span>b</span>
    <div>
        c<div>d</div>
    </div>
</HelloWorld>

console.log(a)

tinyReact.render(a, document.body)
