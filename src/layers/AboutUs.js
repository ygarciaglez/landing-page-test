import React,{Component} from 'react'



class AboutUs extends Component{

    
    render(){
        return(
            <div className="App">
                <header className="App-header">

                    <p>
                    Landing Page.
                    </p>

                    <button onClick ={()=>this.props.history.push(`/portal`)}>
                        portal
                    </button>

                    <button onClick ={()=>this.props.history.push(`/blog`)}>
                        Blog
                    </button>
                </header>
            </div>
        )
    }
}

export default AboutUs;
