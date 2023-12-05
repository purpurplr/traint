import { env } from 'environment';

import { useState } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

import { Loader } from '@shared-components/loader/loader.component';
import { SnackBarComponent } from '@shared-components/snackbar/snackbar.component';

interface EmailJS {
  send: (serviceID: string, templateID: string, templatePrams?: Record<string, unknown>, publicKey?: string) => Promise<EmailJSResponseStatus>;
}

export const ContactUs = (): JSX.Element =>  {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [modalOpen, setModalOpen] = useState(false);
  const [snackBarOpen, setSnackBarOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isEmailSentError, setIsEmailSentError] = useState(false);

  const successMessage = 'Ваше письмо отправлено! Мы свяжемся с вами в ближайшее время.';
  const errorMessage = 'Что-то пошло не так. Попробуйте позже.';
  const errorValidationMessage = 'Поле обязательно для заполнения';
  const sendButtonLabel = 'Отправить';
  const cancelButtonLabel = 'Отменить';
  const modalHeader = 'Связаться с нами';
  const modalText = 'Если у вас есть вопросы или предложения, напишите нам.';

  const handleModalClick = (open: boolean) => () => {
    setModalOpen(open);
  }

  const handleSnackBarClick = (open: boolean) => () => {
    setSnackBarOpen(open);
  }

  const setDefaultLoadingState = (): void => {
    setSnackBarOpen(true);
    setLoading(false);
    setModalOpen(false);
  }

  const sendEmail = async (data: FieldValues): Promise<void> => {
    setLoading(true);
    await (emailjs as EmailJS).send(
      env.contactUs.serviceId,
      env.contactUs.templateId,
      { email: data.name, message: data.message },
      env.contactUs.publicKey,
    ).then(() => {
        setDefaultLoadingState();
        setIsEmailSentError(false);
      }, () => {
        setDefaultLoadingState();
        setIsEmailSentError(true);
      });
  };

  return (
    <>
      <IconButton aria-label="Contact Us" onClick={handleModalClick(true)}>
        <QuestionMarkIcon className="filters__icon" />
      </IconButton>
      <Dialog open={modalOpen} onClose={handleModalClick(true)}>
        <DialogTitle>{modalHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {modalText}
          </DialogContentText>
          <form onSubmit={handleSubmit(sendEmail)}>
            <TextField
              {...register("name", { required: true })}
              margin="dense"
              id="name"
              name="name"
              label="Ваш Email"
              fullWidth
              variant="standard"
            />
            <span className="form-control-error">{errors.name && errorValidationMessage}</span>
            <TextField
              {...register("message", { required: true })}
              margin="dense"
              id="message"
              name="message"
              label="Сообщение"
              fullWidth
              variant="standard"
            />
            <span className="form-control-error">{errors.message && errorValidationMessage}</span>
            <DialogActions>
              <Button onClick={handleModalClick(false)}>{cancelButtonLabel}</Button>
              <Button disabled={loading} type='submit'>{
                loading
                  ? <><Loader /> <span className="contact-us__send-label">{sendButtonLabel}</span></>
                  : <>{sendButtonLabel}</>
              }</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      {
        <SnackBarComponent onClose={handleSnackBarClick(false)}
                           open={snackBarOpen}
                           vertical={'top'}
                           horizontal={'center'}
                           severity={isEmailSentError ? 'error' : 'success'}
                           message={isEmailSentError ? errorMessage : successMessage}
                           autoHideDuration={3000}
        />
      }
    </>
  );
}
