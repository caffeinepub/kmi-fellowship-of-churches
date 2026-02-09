import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ministrySeals } from '../content/ministrySeals';
import { publicAssetUrl } from '../utils/publicAssetUrl';

export default function MinistrySealsSection() {
  return (
    <div className="space-y-8">
      <div className="card-grid">
        {ministrySeals.map((seal, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <button
                className="group card-surface p-4 transition-all hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
                aria-label={`View larger version of ${seal.alt}`}
              >
                <div className="aspect-square w-full overflow-hidden rounded-md">
                  <img
                    src={publicAssetUrl(seal.src)}
                    alt={seal.alt}
                    className="h-full w-full object-contain transition-transform group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    Click to view larger
                  </p>
                </div>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
              <div className="p-4">
                <img
                  src={publicAssetUrl(seal.src)}
                  alt={seal.alt}
                  className="w-full h-auto"
                />
                <p className="mt-4 text-sm text-center text-muted-foreground">{seal.alt}</p>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground">
        Click any image to view it in full size
      </p>
    </div>
  );
}
