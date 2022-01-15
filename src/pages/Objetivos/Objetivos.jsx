import { Layout, Row, Card } from "antd";
const { Meta } = Card;
const Objetivos = () => {
  return (
    <Row><Card >
         <Meta
            
            title="OBJETIVOS "
           /> <p> General: Brindar un espacio para aprender y desarrollar redes de
          computadoras y juegos, en el proceso de una investigación formativa.  </p>
        <Meta
            
            title="OBJETIVOS  ESPECIFICOS"
           
          />
        <ul>
          <li>
            1. Ofrecer un espacio de intercambio de conocimiento en redes de
            computadoras, contenidos digitales y el desarrollo de videojuegos.
          </li>
          <ol>
            2. Fomentar en los participantes el desarrollo de habilidades básicas
            de investigación en temas relacionados con las redes de datos los
            videojuegos y los Metaversos.
          </ol>
      </ul></Card>
        <Card 
        
           >
        
          <Meta
            
            title="LINEAS DE INVESTIGACIÓN "
            description="1. Informática Educativa" 
          />
      </Card> <Card  >
        
          <Meta  title="ENTIDADES PARTICIPANTES"   />
      </Card>
        <Card 
          style={{ width: 300 }}
          cover={<img alt="example" src='https://lh3.googleusercontent.com/6dYvEhqmRs2qKgMb6f7_aVU1htRtT3Q71edPjp4m3FbaHuqHJybl3yajdgDmZ17bmFqhxh3zWNeHaV2iqa8Un6tbqlQcBXOA8M4fstLnODQ9GlDu=w1280' />}
           >     
       
        </Card>
        <Card 
          style={{ width: 300 }}
          cover={<img alt="example" src='https://lh5.googleusercontent.com/T-VcYT-fyppo1P_aW2rNnfpZCrlgzI6OzKOcstAhaN8wkjAFIwPxxaEjwQpdDVuq5_keMA=w1280' />}
           >     
       
        </Card>
      </Row>
    
  );
};
export default Objetivos