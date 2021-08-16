import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArchive, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTwitter,
  faLinkedin,
  faDiscourse
} from '@fortawesome/free-brands-svg-icons'

export default function Newsletter() {
  return (
    <>
      <div className='bg-gray-100'>
        <div className='container flex mx-auto pt-4 px-4 sm:px-6 lg:pt-8 lg:px-8 lg:flex lg:items-center font-sans'>
          <h2
            className='text-3xl font-bold tracking-tight sm:text-4xl text-green-600'
            id='newsletter-headline'
          >
            Preprint Newsletter
          </h2>
        </div>
        <div className='container flex mx-auto py-2 px-8 font-sans text-gray-700'>
          Signup for our weekly preprint newsletter, sent every Monday at 12 PM
          GMT. Check the subject areas for which you want to receive a
          newsletter&nbsp;below. The newsletter contains titles, abstracts and
          authors of preprints published the previous week on either the BioRxiv
          or MedRxiv archive, and tweeted at least three times. You can
          unsubscribe any time.
        </div>
        <div className='container flex mx-auto py-2 px-8 font-sans text-gray-700'>
          Use the&nbsp;
          <Link href='https://discuss.front-matter.io/c/preprints/11' passHref>
            <a
              href='dummy'
              className='text-green-600 hover:text-green-400 border-b-0'
            >
              Front Matter discussion forum
            </a>
          </Link>
          &nbsp; for any questions or comments.
        </div>
        <div className='container flex mx-auto py-2 px-8 font-sans text-gray-700'>
          <div className='mt-6'>
            <form
              action='https://static.mailerlite.com/webforms/submit/b5d0u2'
              data-code='b5d0u2'
              method='post'
              target='_blank'
            >
              <div className='mt-1 mb-6 sm:mt-0 sm:col-span-2'>
                <input
                  type='email'
                  name='fields[email]'
                  placeholder='Email'
                  className='max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md'
                />
              </div>
              <fieldset>
                <legend className='font-medium text-xl text-gray-900'>
                  Subject Areas
                </legend>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331903'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='COVID'
                        className='font-medium text-gray-700'
                      >
                        COVID
                      </label>
                      <p className='text-gray-500'>
                        This section covers preprints in biology and medicine
                        about the SARS-CoV-2 virus.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331909'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Medical and Health Sciences'
                        className='font-medium text-gray-700'
                      >
                        Medical and Health Sciences
                      </label>
                      <p className='text-gray-500'>
                        This division covers the medical and health sciences,
                        with the exception to preprints related to SARS-Cov-2.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='108148192'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Biochemistry and Cell Biology'
                        className='font-medium text-gray-700'
                      >
                        Biochemistry and Cell Biology
                      </label>
                      <p className='text-gray-500'>
                        This group covers biochemistry, and includes cell
                        biology, developmental biology, and membrane biology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331889'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Bioinformatics'
                        className='font-medium text-gray-700'
                      >
                        Bioinformatics
                      </label>
                      <p className='text-gray-500'>
                        This group covers bioinformatics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='108327457'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Cancer'
                        className='font-medium text-gray-700'
                      >
                        Cancer
                      </label>
                      <p className='text-gray-500'>
                        This group covers cancer, including cancer biology,
                        hematology, and oncology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331913'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Ecology'
                        className='font-medium text-gray-700'
                      >
                        Ecology
                      </label>
                      <p className='text-gray-500'>
                        This group covers ecology other than its environmental
                        applications.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331925'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Evolutionary Biology'
                        className='font-medium text-gray-700'
                      >
                        Evolutionary Biology
                      </label>
                      <p className='text-gray-500'>
                        This group covers evolutionary biology, including
                        biogeography and adaptation.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331937'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Genetics'
                        className='font-medium text-gray-700'
                      >
                        Genetics
                      </label>
                      <p className='text-gray-500'>
                        This group covers genetics, genomics and heredity.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107330529'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Microbiology'
                        className='font-medium text-gray-700'
                      >
                        Microbiology
                      </label>
                      <p className='text-gray-500'>
                        This group covers microbiology, including bacteriology,
                        parasitology and virology. It also includes immunology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331939'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Neurosciences'
                        className='font-medium text-gray-700'
                      >
                        Neurosciences
                      </label>
                      <p className='text-gray-500'>
                        This group covers processes and reactions of the (human)
                        nervous system. It includes neurology and neuromuscular
                        disease.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='108148177'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Physiology'
                        className='font-medium text-gray-700'
                      >
                        Physiology
                      </label>
                      <p className='text-gray-500'>
                        This group covers physiology other than medical or
                        plant. It includes biophysics.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107331995'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Plant Biology'
                        className='font-medium text-gray-700'
                      >
                        Plant Biology
                      </label>
                      <p className='text-gray-500'>
                        This group covers plant biology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='108258364'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Zoology'
                        className='font-medium text-gray-700'
                      >
                        Zoology
                      </label>
                      <p className='text-gray-500'>
                        This group covers zoology. It includes animal behavior
                        and cognition.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='mt-4 space-y-4'>
                  <div className='relative flex items-start'>
                    <div className='flex items-center h-5'>
                      <input
                        name='groups[]'
                        type='checkbox'
                        value='107334365'
                        className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded'
                      />
                    </div>
                    <div className='ml-3 text-sm'>
                      <label
                        htmlFor='Other Biological Sciences'
                        className='font-medium text-gray-700'
                      >
                        Other Biological Sciences
                      </label>
                      <p className='text-gray-500'>
                        This group covers biological sciences not elsewhere
                        classified.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
              <input type='hidden' name='ml-submit' value='1' />
              <input type='hidden' name='anticsrf' value='true' />
              <button
                type='submit'
                className='ml-3 mb-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
