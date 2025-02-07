//importerar prop-types
import PropTypes from 'prop-types';
//definera komponenten ProjectCard med destrukturering av props
function ProjectCard({ src, link, h3, p }){
  return (
    //länk som öppnas i en ny flik
   <a href={link} target="blank">
               <img className="hover" src={src} alt={`${h3} logo`}/>
               <h3>{h3}</h3>
               <p>{p}</p>
               </a>
  );
}
//definera prop-typer för ProjectCard komponent
ProjectCard.propTypes = {
  //säger till att src,link,h3 och p måste vara en string och är obligatorisk
  src: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  h3: PropTypes.string.isRequired,
  p: PropTypes.string.isRequired,
};

export default ProjectCard;