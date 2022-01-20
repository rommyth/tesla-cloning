import React from 'react';
import styled from 'styled-components'
import modelY from '../../images/model-y.jpg'

function Section1() {
    return <Wrap>
        satu dua tiga Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quasi nobis itaque earum neque illo nihil corporis mollitia, provident vero totam, consectetur vel a esse, quia necessitatibus impedit omnis! Deserunt officiis quibusdam debitis aut unde quisquam veniam nobis nisi dolore rerum, nihil odit quaerat dolorum ut exercitationem commodi fuga earum! Dolorem impedit repellendus quisquam eveniet officiis! Exercitationem est unde iusto magnam expedita ullam quisquam dolorum error nostrum laboriosam reprehenderit qui laborum consequatur veniam iure, similique suscipit vero beatae fugiat facere, amet obcaecati non ipsum. Unde quam nihil quaerat eligendi, possimus sequi consectetur ducimus iusto maxime, nam magnam doloremque eos qui deserunt, blanditiis autem. Nesciunt autem expedita quaerat velit earum repellendus facilis, nihil commodi, accusamus unde numquam eaque inventore porro quae sequi, aut nemo saepe consequuntur necessitatibus quo magnam omnis? Voluptate veniam nemo dignissimos maxime repudiandae in ullam velit tempora qui itaque atque iusto dolorum tempore culpa, odio at dolor, amet nihil numquam temporibus voluptas! Nesciunt aut esse nostrum quisquam ducimus iste quidem in odio ipsa libero mollitia nemo sit numquam laudantium, incidunt perspiciatis accusamus ex quia dolorum blanditiis illum? Incidunt vero atque inventore magni, exercitationem id doloremque quibusdam consequuntur alias quisquam omnis quam repellendus suscipit voluptates mollitia saepe fugiat excepturi.

    </Wrap>;
}
export default Section1;

const Wrap = styled.div`
    background: url(${modelY});
    width: 100vw;
     height: 100vh;
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     display: flex;
     flex-direction: column; 
     justify-content: space-between;
     align-items: center;
`
