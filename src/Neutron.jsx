import Rive from "rive-react";
import styled from "styled-components";

export default function Neutron({ track }) {
  return (
    <StyledNeutron>
      {track && track === "quiz" && (
        <Rive src="/animations/quiz.riv" height="100%" />
      )}
      {track && track === "loading" && (
        <Rive src="/animations/loading.riv" height="100%" />
      )}
      {track && track === "pdf" && (
        <Rive src="/animations/pdf.riv" height="100%" />
      )}
      {track && track === "404" && (
        <Rive src="/animations/404.riv" height="100%" />
      )}
      {track && track === "fail" && (
        <Rive src="/animations/fail.riv" height="100%" />
      )}
      {track && track === "alert" && (
        <Rive src="/animations/alert.riv" height="100%" />
      )}
      {track && track === "success" && (
        <Rive src="/animations/success.riv" height="100%" />
      )}
      {track && track === "question" && (
        <Rive src="/animations/question.riv" height="100%" />
      )}
      {!track && <Rive src="/animations/loading.riv" height="100%" />}
    </StyledNeutron>
  );
}

const StyledNeutron = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;
  height: 30vh;
  width: 30vh;
`;
