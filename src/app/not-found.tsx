//import React, { useState, useEffect } from "react";
/* import { motion } from "framer-motion";
import Stack from "react-bootstrap/Stack";
import FourOFour from "../img/404.webp";
import { Helmet } from "react-helmet";
import Badge from "../Components/Badge";
 */
export default function NotFound() {
  return (
/*     <motion.div
      style={{
        overflowX: "hidden",
        paddingLeft: "10%",
        paddingRight: "10%",
        marginTop: "2%",
        marginBottom: "2%",
      }}
      initial={{ y: "+840px", opacity: 0 }}
      animate={{ y: 0, opacity: isHydrated ? 1 : 0 }}
      transition={{
        duration: 1.5,
        ease: "easeIn",
        type: "spring",
      }}
    >
      <Helmet>
        <title>404 | Stenstromen.se</title>
      </Helmet> */
      <div>
{/*       <Stack gap={2} className="col-md-5 mx-auto">
        <h1
          style={{
            textAlign: "center",
            color: "white",
          }}
        >
          404 - Page not found
        </h1>
        <p
          style={{
            color: "white",
          }}
        >
          The page you are looking for does not exist. Please check your URL and
          try again.
        </p>
        <Badge
          className="img-fluid"
          alt="404"
          width="100%"
          height="100%"
          src={FourOFour}
        />
      </Stack> */}
      <h1>404 - Page not found</h1>
      <p>The page you are looking for does not exist. Please check your URL and try again.</p>
      <p>The page you are looking for does not exist. Please check your URL and try again.</p>
    </div>
/*     </motion.div> */
  );
}

/* export const runtime = "edge";

export default function NotFound() {
  return (
    <>
      <title>404: This page could not be found.</title>
      <div style={styles.error}>
        <div>
          <style
            dangerouslySetInnerHTML={{
              __html: `body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}`,
            }}
          />
          <h1 className="next-error-h1" style={styles.h1}>
            404
          </h1>
          <div style={styles.desc}>
            <h2 style={styles.h2}>This page could not be found.</h2>
          </div>
        </div>
      </div>
    </>
  );
}

const styles = {
  error: {
    fontFamily:
      'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
    height: "100vh",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  desc: {
    display: "inline-block",
  },

  h1: {
    display: "inline-block",
    margin: "0 20px 0 0",
    padding: "0 23px 0 0",
    fontSize: 24,
    fontWeight: 500,
    verticalAlign: "top",
    lineHeight: "49px",
  },

  h2: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "49px",
    margin: 0,
  },
} as const;
 */