import { styled } from "@stitches/react";

const variables = {
    backgroundColor: "#e4e5f1",
    elementColor: "#fafafa",
    gray: "#d2d3db",
    darkGray: "#9394a5",
    blueGray: "#484b6a",
    shadowRadius: "8px",
}

export const AppContainer = styled("div", {
    display: "flex",
})

export const ListsContainer = styled("div", {
    backgroundColor: variables.backgroundColor,
    height: "100vh",
    width: "25vw",
})

export const InputContainer = styled("div", {
    marginTop: "1vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

export const Element = styled("div", {
    borderRadius: "2vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "1vw",
})

export const TextBlock = styled("div", {
    backgroundColor: variables.elementColor,
    boxShadow: `0px 0px ${variables.shadowRadius} ${variables.darkGray}`,
    borderRadius: "1vh",
    width: "65%",
    height: "2vw",
    lineHeight: "2vw",
    textAlign: "center"
})

export const TasksContainer = styled("div", {
    backgroundColor: variables.backgroundColor,
    height: "100vh",
    width: "75vw",
})

export const AppButton = styled("button", {
    backgroundColor: variables.elementColor,
    height: "2vw",
    width: "2vw",
    marginLeft: "0.5vw",
    borderRadius: "0.5vw",
    border: "none",
    boxShadow: `0px 0px ${variables.shadowRadius} ${variables.darkGray}`,
    transition: "all .2s ease-in",
    '&:hover': {
        transform: "scale(1.1)"
      },
    '&:active': {
        transform: "scale(0.9)"
    },
    '&:disabled': {
        transform: "scale(0.9)",
        backgroundColor: variables.darkGray
    }
})

export const InputName = styled("input", {
    width: "80%",
    height: "2vw",
    border: "none",
    borderRadius: "0.5vw",
    boxShadow: `0px 0px ${variables.shadowRadius} ${variables.darkGray}`,
    textAlign: "center"
})