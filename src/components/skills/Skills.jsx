import { styled } from 'styled-components';
import { Card } from './Card';
import { useState } from 'react';
import { Modal } from './Modal';
import { ModalContents, modalSkills } from './ModalContents';
import javaImage from '../../images/java_icon.png'
import pythonImage from '../../images/python_icon.png'
import javaScriptImage from '../../images/javascript_icon.png'
import typeScriptImage from '../../images/typescript_icon.png'
import reactImage from '../../images/react_icon.png'
import postgresqlImage from '../../images/postgresql_icon.png'
import mysqlImage from '../../images/mysql_icon.png'
import dnyamodbImage from '../../images/dnyamodb_icon.png'
import nginxImage from '../../images/nginx_icon.png'
import wildflyImage from '../../images/wildfly_icon.png'
import tomcatImage from '../../images/tomcat_icon.png'
import linuxImage from '../../images/linux_icon.png'
import awsImage from '../../images/aws_icon.png'
import dockerImage from '../../images/docker_logo.png'
import gitImage from '../../images/git_icon.png'

var modalContent = '';

export const Skills = () => {

    const [isShowModal, setIsShowModal] = useState(false);
    const [modalSkill, setModalSkill] = useState('Java');

    const openModal = () => {
        setIsShowModal(true);
    };

    modalContent = switchModalContent(modalSkill)

    return (
        <>
            <SMain>
                <STop>Language</STop>
                <SContainer>
                    <Card skill="Java" image={javaImage} stars="4.5" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="Python" image={pythonImage} stars="3" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="JavaScript" image={javaScriptImage} stars="2" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="TypeScript" image={typeScriptImage} stars="1.5" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="React" image={reactImage} stars="2" openModal={openModal} setModalSkill={setModalSkill} />
                </SContainer>
                <STop>DB</STop>
                <SContainer>
                    <Card skill="PostgreSQL" image={postgresqlImage} stars="3" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="MySQL" image={mysqlImage} stars="2" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="DynamoDB" image={dnyamodbImage} stars="2" openModal={openModal} setModalSkill={setModalSkill} />
                </SContainer>
                <STop>Web/AP</STop>
                <SContainer>
                    <Card skill="Nginx" image={nginxImage} stars="4" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="WildFly" image={wildflyImage} stars="4" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="Tomcat" image={tomcatImage} stars="4" openModal={openModal} setModalSkill={setModalSkill} />
                </SContainer>
                <STop>Others</STop>
                <SContainer>
                    <Card skill="Linux" image={linuxImage} stars="4" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="AWS" image={awsImage} stars="4" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="Docker" image={dockerImage} stars="4" openModal={openModal} setModalSkill={setModalSkill} />
                    <Card skill="Git" image={gitImage} stars="3" openModal={openModal} setModalSkill={setModalSkill} />
                </SContainer>
                <Modal isShow={isShowModal} setIsShowModal={setIsShowModal} modalContent={modalContent}></Modal>
            </SMain>
        </>
    );
};

const switchModalContent = (modalSkill) => {

    switch (modalSkill) {
        case modalSkills.java:
            return ModalContents.get(modalSkills.java);

        case modalSkills.python:
            return ModalContents.get(modalSkills.python);

        case modalSkills.javascript:
            return ModalContents.get(modalSkills.javascript);

        case modalSkills.typescript:
            return ModalContents.get(modalSkills.typescript);

        case modalSkills.react:
            return ModalContents.get(modalSkills.react);

        case modalSkills.postgreSQL:
            return ModalContents.get(modalSkills.postgreSQL);

        case modalSkills.mySQL:
            return ModalContents.get(modalSkills.mySQL);

        case modalSkills.dynamoDB:
            return ModalContents.get(modalSkills.dynamoDB);

        case modalSkills.nginx:
            return ModalContents.get(modalSkills.nginx);

        case modalSkills.wildfly:
            return ModalContents.get(modalSkills.wildfly);

        case modalSkills.tomcat:
            return ModalContents.get(modalSkills.tomcat);

        case modalSkills.linux:
            return ModalContents.get(modalSkills.linux);

        case modalSkills.aws:
            return ModalContents.get(modalSkills.aws);

        case modalSkills.docker:
            return ModalContents.get(modalSkills.docker);

        case modalSkills.git:
            return ModalContents.get(modalSkills.git);

        default:
            return ModalContents.get(modalSkills.java);

    }
}

const SMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const STop = styled.div`
    margin: 3%;
    display: flex;
    justify-content: center;
    font-size: 5vw;
    width: 100%;
`

const SContainer = styled.div`
    @media screen and (width < 1024px) {
        flex-direction: column;
        align-items: center;
    }
    position: relative;
    margin: 2% 2% 2% 2%;
    display: flex;
    flex-wrap: wrap;
	justify-content: space-between;
    width: 80%;
`
