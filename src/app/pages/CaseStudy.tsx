import { useParams, Link, Navigate } from 'react-router';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';
import { Footer } from '../components/Footer';

export function CaseStudy() {
  const { projectId } = useParams();
  const { t } = useTranslation();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white dark:bg-gray-900 pt-20">
      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-8">
        <Link 
          to="/#projects"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-[#c0576f] dark:hover:text-[#febd84] transition-colors"
        >
          <ArrowLeft size={20} />
          {t('caseStudy.backButton')}
        </Link>
      </div>

      {/* Hero Image */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 mb-16">
        <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
            loading="lazy" // ✅ Lazy loading
          />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-32">
        {/* Header */}
        <div className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl tracking-tight mb-6 dark:text-white">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Overview */}
        <section className="mb-16">
          <h2 className="text-3xl tracking-tight mb-6 dark:text-white">
            {t('caseStudy.overview')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.overview}
          </p>
        </section>

        {/* Problem */}
        <section className="mb-16 p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl">
          <h2 className="text-3xl tracking-tight mb-6 dark:text-white">
            {t('caseStudy.problem')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {project.problem}
          </p>
          {project.problemImages && project.problemImages.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problemImages.map((image, index) => (
                <div 
                  key={index}
                  className="aspect-[4/3] rounded-lg overflow-hidden bg-white dark:bg-gray-700"
                >
                  <img 
                    src={image} 
                    alt={`Problem illustration ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy" // ✅ Lazy loading
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Goals */}
        <section className="mb-16">
          <h2 className="text-3xl tracking-tight mb-6 dark:text-white">
            {t('caseStudy.goals')}
          </h2>
          <ul className="space-y-4">
            {project.goals.map((goal, index) => (
              <li key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#c0576f] dark:bg-[#febd84] dark:text-[#470d3b] text-white rounded-lg flex items-center justify-center">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed pt-1">
                  {goal}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <h2 className="text-3xl tracking-tight mb-6 dark:text-white">
            {t('caseStudy.designProcess')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.designProcess}
          </p>
        </section>

        {/* Development */}
        <section className="mb-16">
          <h2 className="text-3xl tracking-tight mb-6 dark:text-white">
            {t('caseStudy.development')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {project.development}
          </p>
        </section>

        {/* Screenshots */}
        {(project.galleryWithVideo && project.galleryWithVideo.length > 0) ? (
          <section className="mb-16">
            <h2 className="text-3xl tracking-tight mb-8 dark:text-white">
              Screenshots
            </h2>
            <div className="grid gap-8">
              {project.galleryWithVideo.map((gallery, index) => (
                <div 
                  key={index}
                  className="rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg space-y-4"
                >
                  <div className="aspect-[16/10]">
                    <video 
                      src={gallery.video}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="aspect-[16/10]">
                    <img 
                      src={gallery.image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy" // ✅ Lazy loading
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : (project.screenshotsWithVideo && project.screenshotsWithVideo.length > 0) ? (
          <section className="mb-16">
            <h2 className="text-3xl tracking-tight mb-8 dark:text-white">
              Screenshots
            </h2>
            <div className="grid gap-8">
              {project.screenshotsWithVideo.map((media, index) => (
                <div 
                  key={index}
                  className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg"
                >
                  {media.type === 'video' ? (
                    <video 
                      src={media.src}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={media.src} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy" // ✅ Lazy loading
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : project.screenshots.length > 0 && (
          <section className="mb-16">
            <h2 className="text-3xl tracking-tight mb-8 dark:text-white">
              Screenshots
            </h2>
            <div className="grid gap-8">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className="aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-lg"
                >
                  <img 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy" // ✅ Lazy loading
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Result */}
        <section className="mb-16 p-8 bg-[#c0576f] dark:bg-[#febd84] text-white dark:text-[#470d3b] rounded-2xl">
          <h2 className="text-3xl tracking-tight mb-6">
            {t('caseStudy.result')}
          </h2>
          <p className="text-lg leading-relaxed opacity-95">
            {project.result}
          </p>
        </section>

        {/* Next Project CTA */}
        <section className="text-center pt-8 border-t border-gray-200">
          <Link 
            to="/#projects"
            className="inline-flex items-center gap-2 px-8 py-4 w-1/2 mx-auto bg-[#c0576f] dark:bg-[#febd84] text-white dark:text-[#470d3b] rounded-lg hover:bg-[#7e2f56] dark:hover:bg-[#c0576f] transition-colors disabled:bg-green-500 dark:disabled:bg-green-600 disabled:cursor-not-allowed justify-center"
          >
            {t('caseStudy.viewMoreProjects')}
            <ExternalLink size={20} />
          </Link>
        </section>
      </div>

      <Footer />
    </div>
  );
}
