import 'dotenv/config'
import {mailQueue} from './app/lib/Queue'
import {registrationConfig} from './app/jobs/RegistrationMail'

mailQueue.process(registrationConfig.handle);
