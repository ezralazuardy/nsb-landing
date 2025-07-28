"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Heading from "@/components/title";

export default function PrivacyPolicyPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="flex flex-col">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <Heading
          title="Privacy Policy"
          subtitle="Last updated: July 28, 2025"
        />

        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              className="prose prose-lg dark:prose-invert max-w-none"
              variants={containerVariants}
            >
              <motion.h2 variants={itemVariants}>Introduction</motion.h2>
              <motion.p variants={itemVariants}>
                PT Nasaktian Solusi Bersama ("we," "our," or "us") is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website www.nasaktiansolusibersama.co.id (the "Site"). Please read this
                privacy policy carefully. If you do not agree with the terms of this privacy policy, please
                do not access the Site.
              </motion.p>

              <motion.h2 variants={itemVariants}>Information We Collect</motion.h2>
              <motion.p variants={itemVariants}>We may collect information about you in a variety of ways:</motion.p>

              <motion.h3 variants={itemVariants}>Personal Data</motion.h3>
              <motion.p variants={itemVariants}>
                Personally identifiable information, such as your name, shipping address, email address,
                telephone number, and any other information that identifies you as an individual
                ("Personal Data").
              </motion.p>

              <motion.h3 variants={itemVariants}>Derivative Data</motion.h3>
              <motion.p variants={itemVariants}>
                Information our servers automatically collect when you access the Site, such as your IP
                address, your browser type, your operating system, your access times, and the pages you
                have viewed directly before landing on the Site.
              </motion.p>

              <motion.h3 variants={itemVariants}>Financial Data</motion.h3>
              <motion.p variants={itemVariants}>
                Financial information, such as data related to your payment method (e.g., valid credit
                card number, card brand, expiration date) that we may collect when you purchase, order,
                return, exchange products or services.
              </motion.p>

              <motion.h2 variants={itemVariants}>Use of Your Information</motion.h2>
              <motion.p variants={itemVariants}>
                Having accurate information about you permits us to provide you with a smooth, efficient,
                and customized experience. Specifically, we may use information collected about you via
                the Site to:
              </motion.p>
              <motion.ul variants={itemVariants}>
                <li>Create and manage your account</li>
                <li>Process payments and prevent fraudulent transactions</li>
                <li>Send you a newsletter</li>
                <li>Request feedback and contact you about our services</li>
                <li>Respond to your comments, questions, and provide customer service</li>
                <li>Improve our Site and services</li>
                <li>Monitor and analyze usage and trends</li>
              </motion.ul>

              <motion.h2 variants={itemVariants}>Disclosure of Your Information</motion.h2>
              <motion.p variants={itemVariants}>
                We may share information we have collected about you in certain situations. Your information
                may be disclosed as follows:
              </motion.p>

              <motion.h3 variants={itemVariants}>By Law or to Protect Rights</motion.h3>
              <motion.p variants={itemVariants}>
                If we believe the release of information about you is necessary to respond to legal process,
                to investigate or remedy potential violations of our policies, or to protect the rights,
                property, and safety of others, we may share your information as permitted or required by
                any applicable law, rule, or regulation.
              </motion.p>

              <motion.h3 variants={itemVariants}>Third-Party Service Providers</motion.h3>
              <motion.p variants={itemVariants}>
                We may share your information with third parties that perform services for us or on our
                behalf, including payment processing, data analysis, email delivery, hosting services,
                customer service, and marketing assistance.
              </motion.p>

              <motion.h2 variants={itemVariants}>Security of Your Information</motion.h2>
              <motion.p variants={itemVariants}>
                We use administrative, technical, and physical security measures to help protect your
                personal information. While we have taken reasonable steps to secure the personal
                information you provide to us, please be aware that despite our efforts, no security
                measures are perfect or impenetrable, and no method of data transmission can be guaranteed
                against any interception or other type of misuse.
              </motion.p>

              <motion.h2 variants={itemVariants}>Policy for Children</motion.h2>
              <motion.p variants={itemVariants}>
                We do not knowingly solicit information from or market to children under the age of
                thirteen. If you become aware of any data we have collected from children under age 13,
                please contact us.
              </motion.p>

              <motion.h2 variants={itemVariants}>Changes to This Privacy Policy</motion.h2>
              <motion.p variants={itemVariants}>
                We may update this Privacy Policy from time to time in order to reflect, for example,
                changes to our practices or for other operational, legal, or regulatory reasons. We
                encourage you to review this Privacy Policy periodically. The date the Privacy Policy
                was last revised is identified at the top of the page.
              </motion.p>

              <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
              <motion.p variants={itemVariants}>
                If you have questions or comments about this Privacy Policy, please contact us at:
              </motion.p>
              <motion.p variants={itemVariants}>
                PT Nasaktian Solusi Bersama<br />
                Jakarta, Indonesia<br />
                Email: info@nasaktiansolusibersama.co.id
              </motion.p>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}
