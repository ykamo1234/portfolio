import PropTypes from "prop-types";
import { styled } from "styled-components";
import blackStar from "../../images/blackStar.svg";
import halfBlackStar from "../../images/halfBlackStar.svg";
import grayStar from "../../images/grayStar.svg";

export const Card = ({ skill, image, stars, openModal, setModalSkill }) => {

    const integer = Math.trunc(stars);
    const decimal = Math.ceil(stars - integer);
    const rest = 5 - integer - decimal;

    return (
        <SMain onClick={() => { openModal(); setModalSkill(skill) }}>
            <SSkillImg
                alt="Rectangle"
                src={image}
            />
            <SSkill>{skill}</SSkill>
            <SStarTop>
                {[...Array(integer)].map((_, value) =>
                    <SStarImg
                        alt="Star"
                        src={blackStar}
                    />
                )}

                {[...Array(decimal)].map((_, value) =>
                    <SStarImg
                        alt="HalfStar"
                        src={halfBlackStar}
                    />
                )}

                {[...Array(rest)].map((_, value) =>
                    <SStarImg
                        alt="HalfStar"
                        src={grayStar}
                    />
                )}
            </SStarTop>
        </SMain>
    )
}

Card.propTypes = {
    image: PropTypes.string,
    stars: PropTypes.number,
};

const SMain = styled.div`
    @media screen and (width < 1024px) {
        width: 80%;
        height: 18vw;
    }
    cursor: pointer;
    width: 40%;
    margin: 4%;
    // background: linear-gradient(180deg, rgb(255, 255, 255) 0%);
    background: #ffffff;
    box-shadow: 2px 2px 6px rgba(0,0,0,.4);
    display: flex;
    justify-content: space-between;
    transition: all 0.2s ease-out;
    `

const SSkillImg = styled.img`
    @media screen and (width < 1024px) {
        width: 15%;
        hegith: 10%;
    }
    margin: 3%;
    width: 20%;
`

const SSkill = styled.div`
    @media screen and (width < 1024px) {
        font-size: 3vw;
        max-width: 25%
    }
    font-size: 2vw;
    display: flex;
    align-items: center;
`

const SStarTop = styled.div`
    max-width: 50%;
    display: flex;
    justify-content: space-evenly;
`

const SStarImg = styled.img`
    width: 15%;
`