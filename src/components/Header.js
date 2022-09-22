import React from 'react';
import { Disclosure } from '@headlessui/react';
import { Link } from 'gatsby';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Image, Header } from 'flotiq-components-react';
import Logo from '../assets/RR.svg';

const headerText = 'Chef Riccardo';

const PageHeader = () => (
    <Disclosure as="nav">
        {({ open }) => (
            <>
                <div className="max-w-7xl mx-auto py-4">
                    <div className="flex justify-between h-auto flex-wrap md:flex-nowrap">
                        <div className="order-2 md:order-1 flex grow md:grow-0">
                            <div className="flex-shrink-0 flex grow md:grow-0 items-center justify-center">
                                <Link to="/">
                                    <Image url={Logo} additionalClasses={['block h-40 md:h-40 w-auto']} alt="Logo" />
                                </Link>
                            </div>
                            <div className="-ml-2 mr-2 flex items-center md:hidden">
                              
                                
                            </div>
                        </div>
                        <div className="order-3 md:order-2 hidden md:flex items-center justify-center w-full">
                            <Header additionalClasses={['!text-3xl font-semibold']}>
                                {headerText}
                            </Header>
                        </div>
                        <div className="order-1 md:order-3 flex items-center">
                            <div className="flex-shrink-0">
                                <a
                                    href="mailto:hello@domain.com"
                                    className="relative inline-flex items-center px-4 py-2
                                    text-base md:text-lg font-regular hover:text-secondary"
                                >
                                    Contattami!
                                </a>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <Disclosure.Panel className="md:hidden">
                    <div className="pt-4 pb-3 border-t border-gray-200">
                        <div className="flex items-center px-4 sm:px-6">
                            <p></p>
                        </div>
                    </div>
                </Disclosure.Panel>
            </>
        )}
    </Disclosure>
);

export default PageHeader;
