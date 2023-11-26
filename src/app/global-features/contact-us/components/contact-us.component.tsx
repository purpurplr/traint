import { env } from 'environment';

import * as React from 'react';

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
  send: (serviceID: string, templateID: string, templatePrams?: Record<string, unknown> | undefined, publicKey?: string | undefined) => Promise<EmailJSResponseStatus>;
}

export const ContactUs = (): JSX.Element =>  {
  const [state, setState] = React.useState({
    modalOpen: false,
    snackBarOpen: false,
    loading: false,
    isEmailSentError: false,
    email: '',
    emailTouched: false,
    message: '',
    messageTouched: false,
  });
  const { modalOpen, snackBarOpen, loading, isEmailSentError, email, message, messageTouched, emailTouched } = state;

  const successMessage = 'Ваше письмо отправлено! Мы свяжемся с вами в ближайшее время.';
  const errorMessage = 'Что-то пошло не так. Попробуйте позже.';
  const errorValidationMessage = 'Поле обязательно для заполнения';
  const sendButtonLabel = 'Отправить';
  const cancelButtonLabel = 'Отменить';
  const modalHeader = 'Связаться с нами';
  const modalText = 'Если у вас есть вопросы или предложения, напишите нам.';

  const defaultLoadingState = {
    snackBarOpen: true,
    loading: false,
    modalOpen: false,
  }

  const isSubmitButtonDisabled = (): boolean => {
    return email === '' || message === '' || loading;
  }

  const isEmailInvalid = (): boolean => {
    return email === '' && emailTouched;
  }

  const isMessageInvalid = (): boolean => {
    return message === '' && messageTouched;
  }

  const handleModalClick = (open: boolean) => () => {
    setState({ ...state, modalOpen: open });
  }

  const handleSnackBarClick = (open: boolean) => () => {
    setState({ ...state, snackBarOpen: open });
  }

  const sendEmail = (): void => {
    setState({ ...state, loading: true });
    (emailjs as EmailJS).send(
      env.contactUs.serviceId,
      env.contactUs.templateId,
      { email, message },
      env.contactUs.publicKey,
    )
      .then(() => {
        setState({ ...state, ...defaultLoadingState, isEmailSentError: false });
      }, () => {
        setState({ ...state, ...defaultLoadingState, isEmailSentError: true });
      });
  };

  return (
    <React.Fragment>
      <IconButton aria-label="Contact Us" onClick={handleModalClick(true)}>
        <QuestionMarkIcon className="contact-us__icon" />
      </IconButton>
      <Dialog open={modalOpen} onClose={handleModalClick(true)}>
        <DialogTitle>{modalHeader}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {modalText}
          </DialogContentText>
          <form>
            <TextField
              margin="dense"
              id="name"
              name="name"
              label="Ваш Email"
              type="email"
              fullWidth
              required={true}
              error={isEmailInvalid()}
              helperText={isEmailInvalid() ? errorValidationMessage : ''}
              variant="standard"
              value={email}
              onChange={(e) => setState({ ...state, email: e.target.value, emailTouched: true })}
            />
            <TextField
              margin="dense"
              id="message"
              label="Сообщение"
              name="message"
              type="text"
              fullWidth
              required={true}
              error={isMessageInvalid()}
              helperText={isMessageInvalid() ? errorValidationMessage : ''}
              variant="standard"
              value={message}
              onChange={(e) => setState({ ...state, message: e.target.value, messageTouched: true })}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleModalClick(false)}>{cancelButtonLabel}</Button>
          <Button disabled={isSubmitButtonDisabled()} onClick={sendEmail}>{
            loading
              ? <><Loader /> <span className="contact-us__send-label">{sendButtonLabel}</span></>
              : <>{sendButtonLabel}</>
          }</Button>
        </DialogActions>
      </Dialog>
      {
        <SnackBarComponent onClose={handleSnackBarClick(false)}
                           open={snackBarOpen}
                           vertical={'top'}
                           horizontal={'center'}
                           severity={isEmailSentError ? 'error' : 'success'}
                           message={ isEmailSentError ? errorMessage : successMessage }
                           autoHideDuration={1000}
        />
      }
    </React.Fragment>
  );
}
