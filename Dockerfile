# Step 1: Build the React app
FROM node:18-alpine AS builder

# Set environment variables
ENV NODE_ENV=production
ENV REACT_APP_API_URL=https://api.tunganawe.rw/api
ENV REACT_APP_CLOUD_NAME=dibojibkz
ENV REACT_APP_CLOUD_PRESET=m0gzvc3m

# Add a work directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Cache and install dependencies
COPY pnpm-lock.yaml ./
COPY package.json ./

RUN pnpm install --frozen-lockfile --prod

# Copy app files
COPY . .

# Build the app
RUN pnpm run build

# Step 2: Serve the React app with Nginx
FROM nginx:1.21.0-alpine AS production

# Copy built assets from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Copy your nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]
