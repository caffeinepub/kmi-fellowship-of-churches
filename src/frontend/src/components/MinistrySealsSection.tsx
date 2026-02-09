import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { ministrySeals } from '../content/ministrySeals';
import { publicAssetUrl } from '../utils/publicAssetUrl';

export default function MinistrySealsSection() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ministrySeals.map((seal, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <button
                className="group relative overflow-hidden rounded-lg border-2 border-[oklch(var(--flame-gold))] bg-white p-4 transition-all hover:shadow-xl hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[oklch(var(--flame-gold))] focus:ring-offset-2"
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
                  <p className="text-sm font-medium text-[oklch(var(--royal-blue))] group-hover:text-[oklch(var(--flame-gold))]">
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
