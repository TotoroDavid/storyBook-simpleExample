import './myLabel.css'

export interface PropsMyLabel {
    /**
    * you should to change the label you want
    */
    label: string
    /**
    * you have only 4 options for the size
    */
    size: 'normal' | 'h1' | 'h2' | 'h3'
    /**
    * if you want all capitalizers
    */
    allCaps: boolean
    /**
    * the color of my button
    */
    color: 'primary' | 'secondary' | 'tertiary'
    /**
    *  change the font color
    */
    fontColor?: string
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    fontColor,
    label = 'no label',
    size = 'normal',
}: PropsMyLabel) => {
    return (
        <span
            className={`label ${size} text-${color} `}
            style={{ color: fontColor }}
        >
            {
                allCaps ? label.toLocaleUpperCase() : label
            }
        </span>
    )
}
