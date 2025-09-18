import React from 'react';
import { Button, Input, Textarea } from '@/components';
import { useForm } from '@/hooks';
import { ContactFormData } from '@/types';

const Contact = () => {
  const { values, errors, isSubmitting, handleChange, handleSubmit } = useForm<ContactFormData>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: (values) => {
      const errors: Partial<Record<keyof ContactFormData, string>> = {};
      if (!values.name.trim()) errors.name = 'Nome é obrigatório';
      if (!values.email.trim()) errors.email = 'Email é obrigatório';
      if (!values.message.trim()) errors.message = 'Mensagem é obrigatória';
      return errors;
    },
    onSubmit: async (values) => {
      console.log('Form submitted:', values);
      // Here you would typically send the data to your API
    },
  });

  return (
    <section id="contact" className="py-20" style={{backgroundColor: '#041437'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Estamos aqui para ajudar!
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              label="Nome"
              value={values.name}
              onChange={(e) => handleChange('name', e.target.value)}
              placeholder="Seu nome completo"
              required
              error={errors.name}
            />
            <Input
              label="Email"
              type="email"
              value={values.email}
              onChange={(e) => handleChange('email', e.target.value)}
              placeholder="seu@email.com"
              required
              error={errors.email}
            />
            <Textarea
              label="Mensagem"
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              placeholder="Sua mensagem aqui..."
              required
              error={errors.message}
            />
            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
