import * as React from "react"
import { Frame, addPropertyControls, ControlType } from "framer"

export function FakeProfile(props) {
    const { size, bound, boundColor, boundDisplay, radius } = props

    return (
        <Frame
            center
            width={bound}
            height={bound}
            size={"100%"}
            backgroundColor={boundDisplay ? boundColor : "transparent"}
        >
            <Frame
                center
                size={"100%"}
                width={size}
                height={size}
                image="https://thispersondoesnotexist.com/image"
                borderRadius={radius + "%"}
                overflow={"hidden"}
            />
        </Frame>
    )
}

FakeProfile.defaultProps = {
    size: 148,
    bound: 180,
    boundColor: "#f7e8f6",
    boundDisplay: true,
    radius: 50,
}

addPropertyControls(FakeProfile, {
    size: {
        min: 24,
        max: 240,
        title: "Image Size",
        type: ControlType.Number,
        defaultValue: 148,
        step: 4,
        displayStepper: true,
    },

    bound: {
        min: 24,
        max: 280,
        title: "Bound Size",
        type: ControlType.Number,
        defaultValue: 180,
        step: 4,
        displayStepper: true,
    },

    boundColor: {
        title: "Bound Color",
        type: ControlType.Color,
        defaultValue: "#f7e8f6",
    },

    boundDisplay: {
        title: "Display Bounds?",
        type: ControlType.Boolean,
        defaultValue: true,
    },

    radius: {
        title: "Radius",
        type: ControlType.Number,
        min: 0,
        max: 50,
        step: 2,
        defaultValue: 50,
        displayStepper: false,
    },
})
