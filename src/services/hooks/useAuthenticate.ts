import { toast } from 'react-toastify';
import { ERROR_CODE } from 'constants/errors';
import http from 'services/utilities/http';

export const handleSignup = async (
  username: string,
  email: string,
  password: string,
  confirmPassword: string,
) => {
  try {
    await http.post('/auth/signup', {
      username,
      email,
      password,
      confirmPassword,
    });
    const responseSendMail = await handleSendMail(email);
    return responseSendMail;
  } catch (err: any) {
    if (
      err?.message === ERROR_CODE.Auth_EmailAlreadyRegistered ||
      err === ERROR_CODE.Auth_EmailAlreadyRegistered
    ) {
      const responseSendMail = await handleSendMail(email);
      return responseSendMail;
    } else {
      toast.error(err?.message || err);
    }
  }

  return;
};

export const handleLogin = async (
  email: string,
  password: string,
): Promise<any | undefined> => {
  // TODO: Define interface
  try {
    const response = (await http.post('/auth/login', {
      email,
      password,
    })) as unknown as any;
    return response;
  } catch (err: any) {
    toast.error(err?.message || err);
  }
};

export const handleSendMail = async (email: string) => {
  try {
    const response = await http.get(
      `/auth/email/request-verify?email=${email}`,
    );
    return response;
  } catch (err: any) {
    toast.error(err?.message || err);
  }
};
