import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/products";

const Projects = () => {
  return (
    <section id="projects" className="md:px-24 py-4 relative">
      <article className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here is a few of my projects.Each project is carefully created with
          attention to details,prformance and user experience
        </p>
        <article className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs"
            >
              <figure className="overflow-hidden h-40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-100"
                />
              </figure>
              <article className="p-6">
                <article className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 font-medium bg-secondary  text-secondary-foreground rounded-full text-xs border-1  border-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </article>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <article className="flex justify-between items-center">
                  <article className="flex space-x-3">
                    <Link
                      to={project.hostedUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </Link>
                    <Link
                      to={project.gitHubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </Link>
                  </article>
                </article>
              </article>
            </article>
          ))}
        </article>
        <section className="text-center mt-12">
          <Link
            to="https://www.github.com/layomi1"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} />
          </Link>
        </section>
      </article>
    </section>
  );
};

export default Projects;
