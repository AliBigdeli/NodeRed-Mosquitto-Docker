FROM nodered/node-red

# Install additional packages
RUN npm install node-red-admin node-red-contrib-credentials

# Copy custom settings file
COPY dockerfiles/nodered/settings.js /data/settings.js


# Set environment variables for username and password
ENV NR_USERNAME myusername
ENV NR_PASSWORD mypassword

# Expose port
EXPOSE 1880 

CMD ["npm", "start", "--", "--userDir", "/data"]