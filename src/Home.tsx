import React from "react";


export class Home extends React.Component {

    constructor(props: any) {
        super(props);
        this.state = {
            submitted: false
        };
    }

    submitNote = (e: any) => {
        e.preventDefault();
        this.setState({submitted: true});
    }

    render() {
        // @ts-ignore
        const submitted = this.state.submitted;

        return (
            <div>
            <form action="" id={'form'} onSubmit={this.submitNote}>
                <input type="text" id={'description'}/>
                <input type="submit" id={'submit-note'} value={'Submit note'}/>
            </form>
            {
                submitted ? <div className={'alert-success'}>Note submitted successfully</div> : ''
            }
            </div>
        );
    }

}


export default Home;
