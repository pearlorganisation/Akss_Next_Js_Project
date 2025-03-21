import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Mail, Briefcase, MessageSquare, User, X } from 'lucide-react';

interface ContactDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  contact: {
    name: string;
    email: string;
    company?: string;
    message?: string;
  } | undefined;
}

const ContactDetailsModal: React.FC<ContactDetailsModalProps> = ({ isOpen, onClose, contact }) => {
  if (!contact) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">Contact Details</DialogTitle>
          <DialogDescription>
            Information about {contact?.name}
          </DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            {/* <X className="h-4 w-4" /> */}
            {/* <span className="sr-only">Close</span> */}
          </DialogClose>
        </DialogHeader>
        <div className="py-4 space-y-4">
          <div className="flex items-start">
            <User className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="text-lg font-medium">{contact.name}</p>
            </div>
          </div>

          <div className="flex items-start">
            <Mail className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="text-lg break-all">{contact.email}</p>
            </div>
          </div>

          {contact.company && (
            <div className="flex items-start">
              <Briefcase className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Company</p>
                <p className="text-lg">{contact.company}</p>
              </div>
            </div>
          )}

          {contact.message && (
            <div className="flex items-start">
              <MessageSquare className="h-5 w-5 mr-3 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-500">Message</p>
                <p className="text-base text-gray-700">{contact.message}</p>
              </div>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-end">
          <Button variant="outline" onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDetailsModal;