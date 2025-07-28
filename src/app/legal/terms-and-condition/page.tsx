"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Heading from "@/components/title";

export default function TermsAndConditionsPage() {
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
          title="Terms and Conditions"
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
                These Terms and Conditions ("Terms", "Terms and Conditions") govern your relationship
                with www.nasaktiansolusibersama.co.id website (the "Service") operated by PT Nasaktian
                Solusi Bersama ("us", "we", or "our").
              </motion.p>
              <motion.p variants={itemVariants}>
                Please read these Terms and Conditions carefully before using the Service. Your access
                to and use of the Service is conditioned on your acceptance of and compliance with
                these Terms. These Terms apply to all visitors, users, and others who access or use
                the Service.
              </motion.p>
              <motion.p variants={itemVariants}>
                By accessing or using the Service, you agree to be bound by these Terms. If you disagree
                with any part of the terms, then you may not access the Service.
              </motion.p>

              <motion.h2 variants={itemVariants}>Intellectual Property</motion.h2>
              <motion.p variants={itemVariants}>
                The Service and its original content, features, and functionality are and will remain
                the exclusive property of PT Nasaktian Solusi Bersama and its licensors. The Service is
                protected by copyright, trademark, and other laws of both the Indonesia and foreign countries.
              </motion.p>
              <motion.p variants={itemVariants}>
                Our trademarks and trade dress may not be used in connection with any product or service
                without the prior written consent of PT Nasaktian Solusi Bersama.
              </motion.p>

              <motion.h2 variants={itemVariants}>Links To Other Web Sites</motion.h2>
              <motion.p variants={itemVariants}>
                Our Service may contain links to third-party web sites or services that are not owned
                or controlled by PT Nasaktian Solusi Bersama.
              </motion.p>
              <motion.p variants={itemVariants}>
                PT Nasaktian Solusi Bersama has no control over, and assumes no responsibility for,
                the content, privacy policies, or practices of any third-party web sites or services.
                You further acknowledge and agree that PT Nasaktian Solusi Bersama shall not be
                responsible or liable, directly or indirectly, for any damage or loss caused or alleged
                to be caused by or in connection with use of or reliance on any such content, goods,
                or services available on or through any such web sites or services.
              </motion.p>
              <motion.p variants={itemVariants}>
                We strongly advise you to read the terms and conditions and privacy policies of any
                third-party web sites or services that you visit.
              </motion.p>

              <motion.h2 variants={itemVariants}>Termination</motion.h2>
              <motion.p variants={itemVariants}>
                We may terminate or suspend access to our Service immediately, without prior notice
                or liability, for any reason whatsoever, including without limitation if you breach
                the Terms.
              </motion.p>
              <motion.p variants={itemVariants}>
                All provisions of the Terms which by their nature should survive termination shall
                survive termination, including, without limitation, ownership provisions, warranty
                disclaimers, indemnity, and limitations of liability.
              </motion.p>

              <motion.h2 variants={itemVariants}>Disclaimer</motion.h2>
              <motion.p variants={itemVariants}>
                Your use of the Service is at your sole risk. The Service is provided on an "AS IS"
                and "AS AVAILABLE" basis. The Service is provided without warranties of any kind,
                whether express or implied, including, but not limited to, implied warranties of
                merchantability, fitness for a particular purpose, non-infringement, or course of
                performance.
              </motion.p>
              <motion.p variants={itemVariants}>
                PT Nasaktian Solusi Bersama, its subsidiaries, affiliates, and its licensors do not
                warrant that a) the Service will function uninterrupted, secure, or available at any
                particular time or location; b) any errors or defects will be corrected; c) the Service
                is free of viruses or other harmful components; or d) the results of using the Service
                will meet your requirements.
              </motion.p>

              <motion.h2 variants={itemVariants}>Governing Law</motion.h2>
              <motion.p variants={itemVariants}>
                These Terms shall be governed and construed in accordance with the laws of Indonesia,
                without regard to its conflict of law provisions.
              </motion.p>
              <motion.p variants={itemVariants}>
                Our failure to enforce any right or provision of these Terms will not be considered
                a waiver of those rights. If any provision of these Terms is held to be invalid or
                unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                These Terms constitute the entire agreement between us regarding our Service, and
                supersede and replace any prior agreements we might have between us regarding the Service.
              </motion.p>

              <motion.h2 variants={itemVariants}>Changes</motion.h2>
              <motion.p variants={itemVariants}>
                We reserve the right, at our sole discretion, to modify or replace these Terms at
                any time. If a revision is material, we will try to provide at least 30 days' notice
                prior to any new terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </motion.p>
              <motion.p variants={itemVariants}>
                By continuing to access or use our Service after those revisions become effective,
                you agree to be bound by the revised terms. If you do not agree to the new terms,
                please stop using the Service.
              </motion.p>

              <motion.h2 variants={itemVariants}>Contact Us</motion.h2>
              <motion.p variants={itemVariants}>
                If you have any questions about these Terms, please contact us:
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
