import './BaseSlide.css'

interface BaseSlideProps {
    children: JSX.Element | JSX.Element[],
}

export default function BaseSlide(props: BaseSlideProps) {

    return (
        <div id="BaseSlide_Container">
            {props.children}
        </div>
    )

}